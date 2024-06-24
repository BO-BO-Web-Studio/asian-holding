
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import useTranslation from 'next-translate/useTranslation';
import classes from './modal-form.module.scss'
import toast from "react-hot-toast";
import { FetchStatus } from "@shared/model";
import { Modal } from "@shared/ui/Modal";
import { Input } from "@shared/ui/Input";
import { Button } from "@shared/ui/Button";
import { BarLoader } from "@shared/ui/loaders/BarLoader";
import { Alert } from "@shared/ui/Alert";
import { useApplicationStore } from "@widgets/application/model/applicationStore";

interface Props {
  isOpen: boolean
  close(): void
}
interface FormData {
  name: string
  number: string
  gmail: string
}

export const ModalForm = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [submitStatus, setSubmitStatus] = useState<FetchStatus>('normal')
  const {
    formState: { errors },
    reset,
    register,
    handleSubmit,
    watch
  } = useForm<FormData>({
    mode: 'onChange'
  })
  useEffect(() => {
    setErrorMessage('')
  }, [watch('number'), watch('name'), watch('gmail')])
  const { toggle, isOpen, close } = useApplicationStore((state) => (state))
  const { t } = useTranslation('common')

  const onSubmit: SubmitHandler<FormData> = async (data) => {

    setSubmitStatus('pending')

    try {
      let text = `<b>Заявка c Asian Holding</b>\n\n`
      text += `<b>Имя:</b> ${data.name}\n`
      text += `<b>Контакт:</b> ${data?.number}\n`
      text += `<b>Почта:</b> ${data?.gmail}\n`

      try {
        const responseTelegram = await fetch(
          `https://api.telegram.org/bot7002729464:AAEcwdUghO4pZB_SgcXBo3I4Px6rAghPs7o/sendMessage`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: -1002229881511,
              parse_mode: 'HTML',
              text: text,
            }),
          },
        )

        toast.success('Успешно отправлено!')
      } catch (e) {
        throw new Error('Произошла ошибка при отправке данных')
      }
    } catch (e) {
      console.error(e)
    }


    reset({
      name: '',
      number: '',
      gmail: '',
    })


    setSubmitStatus('fulfilled')
  }

  return <Modal
    isOpen={isOpen}
    close={close}
    isShowCloseButton={true}
    contentClassName={classes.wrapper}
    mainClassName={classes.body}
  >
    <form
      className={classes.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={classes.bl_title} >
        <h2 className={classes.title} >
          {t('application')}
        </h2>
      </div>
      {!!errorMessage && <Alert type="danger">{errorMessage}</Alert>}
      <div className={classes.items} >
        <div className={classes.item}>
          <Input
            label={t('questionLabel1')}
            groupProps={{ className: classes.inputGroup }}
            {...register('name', {
              required: 'What is your name?',
            })}
            placeholder={t('questionInput1')}
            errorMessage={errors.name?.message}
          />
        </div>
        <div className={classes.item}>
          <Input
            label={t('questionLabel3')}
            groupProps={{ className: classes.inputGroup }}
            {...register('gmail', {
              required: 'Exaple@gmail.com?',
            })}
            placeholder={t('questionInput3')}
            errorMessage={errors.gmail?.message}
          />
        </div>
        <div className={classes.item}>
          <Input
            label={t('questionLabel2')}
            groupProps={{ className: classes.inputGroup }}
            {...register('number', {
              required: 'Phone number?',
            })}
            placeholder={t('questionInput2')}
            errorMessage={errors.number?.message}
          />
        </div>
      </div>
      <div className={classes.bl_buttons} >
        <Button
          type="submit"
          bg='secondary'
          fullWidth
          className={classes.button_send}
          onClick={() => toggle()}
        >
          отмена
        </Button>
        <Button
          type="submit"
          fullWidth
          className={classes.button_send}
          onClick={(event) => {
            if (submitStatus === 'pending') {
              event.preventDefault()
            }
          }}
        >
          {submitStatus === 'pending' && (
            <BarLoader
              color="#fff"
              width={20}
              height={20}
              size={3}
            />
          )}
          {submitStatus !== 'pending' && <span>{t('send')}</span>}
        </Button>
      </div>
    </form>
  </Modal>
}
