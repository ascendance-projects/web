import { valibotResolver } from "@hookform/resolvers/valibot";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type {
  ContactSchemaInput,
  ContactSchemaOutput,
} from "../validation/contactSchema";
import { contactSchema } from "../validation/contactSchema";

export default function useContactForm() {
  const form = useForm<ContactSchemaInput>({
    resolver: valibotResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactSchemaOutput> = data => {};

  return {
    form,
    onSubmit,
  };
}
