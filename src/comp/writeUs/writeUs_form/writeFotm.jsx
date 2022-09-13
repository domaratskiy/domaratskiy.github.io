
import f from './writeFotm.module.css';

const WriteForm = () => {

    return (
       
        <form action="" className={f.writeUs_form}>
            <input type="text" required placeholder="Введити ваше Имя и Фамилию"   />
            <input type="text" required placeholder="Введити адрес электройнно почты" />
            <input type="text" required placeholder="Введити телефон" />
            <input type="text" required placeholder="Введити тему сообщения" />
            <textarea  id={f.writeUs_textarea} cols="30" rows="10" placeholder='Введите текст'></textarea>
            <input type="submit" placeholder="Отправить"/>
        </form>

    )
   
}
export default WriteForm;