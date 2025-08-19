import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistSignupSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { CheckCircle, AlertCircle } from "lucide-react";

export function WaitlistForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSuccess, setIsSuccess] = useState(false);
  
  const form = useForm({
    resolver: zodResolver(insertWaitlistSignupSchema),
    defaultValues: {
      email: "",
    },
  });

  const joinWaitlistMutation = useMutation({
    mutationFn: async (data: { email: string }) => {
      const response = await apiRequest("POST", "/api/waitlist", data);
      return response.json();
    },
    onSuccess: (data) => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: "Welcome to Smart Inbox!",
        description: "You'll be the first to know when we launch.",
      });
      // Invalidate and refetch signup count
      queryClient.invalidateQueries({ queryKey: ["/api/signup-count"] });
    },
    onError: (error: any) => {
      toast({
        title: "Oops! Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: { email: string }) => {
    setIsSuccess(false);
    joinWaitlistMutation.mutate(data);
  };

  return (
    <div className="max-w-md mx-auto mb-12" data-testid="waitlist-form">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 text-lg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent shadow-sm"
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            disabled={joinWaitlistMutation.isPending}
            className="bg-gradient-to-r from-brand-blue to-brand-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:transform-none"
            data-testid="button-join-waitlist"
          >
            {joinWaitlistMutation.isPending ? "Joining..." : "Join the Waitlist for Free"}
          </Button>
        </form>
      </Form>
      
      {/* Success State */}
      {isSuccess && (
        <div className="mt-4 text-sm text-green-600 flex items-center justify-center" data-testid="message-success">
          <CheckCircle className="mr-2" size={16} />
          Thanks! You'll be the first to know when we launch.
        </div>
      )}
      
      {/* Error State */}
      {form.formState.errors.email && (
        <div className="mt-4 text-sm text-red-600 flex items-center justify-center" data-testid="message-error">
          <AlertCircle className="mr-2" size={16} />
          {form.formState.errors.email.message}
        </div>
      )}
    </div>
  );
}
