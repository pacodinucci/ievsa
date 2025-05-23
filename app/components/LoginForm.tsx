"use client";

import { CardWrapper } from "./CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "../../schemas";
import * as z from "zod";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import { login } from "../../actions/login";
import { getSession, signIn } from "next-auth/react";
import { useState, useTransition } from "react";
import { DEFAULT_LOGIN_REDIRECT } from "../../routes";

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    const { email, password } = values;

    const result = await signIn("credentials", {
      redirect: true,
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      setSuccess("Inicio de sesión exitoso");
      await getSession();
    }
  };

  return (
    <CardWrapper
      headerLabel="Iniciar Sesión"
      backButtonLabel="No estás registrado/a?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="-space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="nombre@mail.com"
                      type="email"
                      className="rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type="password"
                      className="rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            className="w-full bg-[#402F2E] hover:bg-[#402F2E]/80 rounded-none"
            disabled={isPending}
          >
            Iniciar Sesión
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
