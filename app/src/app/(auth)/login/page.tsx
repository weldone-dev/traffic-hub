import { EmailIcon } from "@/shared/icons";
import { FieldInput } from "@/shared/ui";

export default function PageLogin () {
  return (
    <div>
      <FieldInput
        label='Email'
        placeholder='your@email.com'
        // error="Ошибка"
        startContent={<EmailIcon />}
        className='mb-4'
      />
    </div>
  )
}
