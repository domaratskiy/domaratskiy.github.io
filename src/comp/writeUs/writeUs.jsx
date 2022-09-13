import SeporatorLine from './../../comp/homePageComponent/seporator/seporator';
import w  from './writeUs.module.css';
import WriteForm from './writeUs_form/writeFotm';


const WriteUs = () => {
    return (
        <div className="wrapper">
            <main>
                <div className={w.writeUs_cont}>
                    <h1 className={w.writeUs_name}>Напишите нам</h1>
                    <p className={w.writeUs_text}>Если у вас есть какие-либо вопросы или вы просто хотите отправить нам сообщение, используйте форму ниже!</p>
                    <WriteForm/>                    
                </div>
                <SeporatorLine/>
            </main>
        </div>
    )
}
export default WriteUs;