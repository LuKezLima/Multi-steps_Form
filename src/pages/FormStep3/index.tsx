import { useNavigate, Link} from 'react-router-dom'
import * as C from './styles'
import {useForm, FormActions} from '../../contexts/FormContext'
import {Theme} from '../../components/Theme/index'
import { ChangeEvent, useEffect } from 'react'

export const FormStep3 = () =>{
    const history = useNavigate()

    const { state, dispatch } = useForm();

    
   
    useEffect( ()=>{
        if(state.name === ''){
            history('/')
        }else{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }
    },[])


    const handleNextStep = ()=>{
        if(state.email !== "" && state.github !== ""){
            history('/resume')
        } else{
            alert("Preencha os dados!")
        }
    }

    const handleEmailChange=(e:ChangeEvent<HTMLInputElement>) => {
        dispatch(
            {
                type: FormActions.setEmail,
                payload: e.target.value
            }
        )
    }
    const handleGithubChange=(e:ChangeEvent<HTMLInputElement>) => {
        dispatch(
            {
                type: FormActions.setGithub,
                payload: e.target.value
            }
        )
    }

    return(
        <Theme>
        <C.Container>
           <p>Passo 3/3</p>
           <h1>Legal {state.name}, onde te achamos?</h1>
           <p>Preencha com seus contatos.</p>

           <hr></hr>

           <label htmlFor="">Qual seu e-mail?
           <input 
           type="text"
           value={state.email}
           onChange={handleEmailChange}
           /> 
           </label>

            <label htmlFor="">Qual seu endereço do github?
           <input 
           type="text"
           value={state.github}
           onChange={handleGithubChange}
           />
           
           </label>
           <Link className='backButton' to='/step2'>Voltar</Link>
           <button onClick={handleNextStep}>Finalizar cadastro</button>
        </C.Container>
        </Theme>
    )
}