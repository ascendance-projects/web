import * as v from 'valibot'

const MIN_NAME_LENGTH = 2
const MAX_NAME_LENGTH = 50

const MIN_MESSAGE_LENGTH = 10
const MAX_MESSAGE_LENGTH = 500

export const contactSchema = v.object({
  name: v.string('Please provide your name', [
    v.minLength(
      MIN_NAME_LENGTH,
      `Name must be at least ${MIN_NAME_LENGTH} characters long`,
    ),
    v.maxLength(
      MAX_NAME_LENGTH,
      `Name must be at most ${MAX_NAME_LENGTH} characters long`,
    ),
  ]),
  email: v.string('Please provide your email', [
    v.email('Please provide a valid email address'),
  ]),
  message: v.string('Please provide a message', [
    v.minLength(
      MIN_MESSAGE_LENGTH,
      `Message should be at least ${MIN_MESSAGE_LENGTH} characters long`,
    ),
    v.maxLength(
      MAX_MESSAGE_LENGTH,
      `Message should be at most ${MAX_MESSAGE_LENGTH} characters long`,
    ),
  ]),
})

export type ContactSchemaInput = v.Input<typeof contactSchema>;
export type ContactSchemaOutput = v.Output<typeof contactSchema>;
