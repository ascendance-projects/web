'use client'

import { Button } from '~/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import useContactForm from '~/features/contact/hooks/useContactForm'

export default function Contact () {
  const {form, onSubmit} = useContactForm()

  return (
    <section className="relative mt-24 overflow-clip py-32">
      <div className="container">
        <h2 className="text-center text-5xl font-bold">Start today!</h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto mt-16 flex max-w-2xl flex-col gap-4"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John Doe"/>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="email@gmail.com"
                        />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div>
              <FormField
                control={form.control}
                name="message"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Your message"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="mt-4 self-center"
              variant="secondary"
            >
              Send the message
            </Button>
          </form>
        </Form>
      </div>
    </section>
  )
}
