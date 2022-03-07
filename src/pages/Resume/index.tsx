import { useNavigate, Link} from 'react-router-dom'
import * as C from './styles'
import {useForm, FormActions} from '../../contexts/FormContext'
import {Theme} from '../../components/Theme/index'
import { ChangeEvent, useEffect } from 'react'
import { SelectOption } from '../../components/SelectOption'

export const Resume = () =>{
    const history = useNavigate()

    const { state, dispatch } = useForm();

    useEffect( ()=>{
        if(state.github === ''){
            history('/')
        }else{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
        })
    }
    },[])


    const handleNextStep = ()=>{
        alert("Eba, seu cadastro foi concluído com sucesso")
    }

  

    return(
        <Theme>
        <C.Container>
           <p>Resumo</p>
           <h1>Confirme se todos os dados abaixo estão corretos.</h1>

           <hr></hr>
           <h2>Pessoal:</h2>
           <label htmlFor="">Seu nome completo:
           <h2>{state.name}</h2>
           </label>

           <h2>Profissional:</h2>
           <SelectOption title={state.level == 0 ? 'Iniciante' :'Programador' }
           description={state.level == 0 ? 'Programo há menos de 2 anos' :'Já programo há 2 anos ou mais' }
           icon={state.level == 0 ? '🥳' :'😎'} selected={true} ></SelectOption>

           <h2>Contatos:</h2>
           <label htmlFor="">Seu e-mail:
           <h2>{state.email}</h2>
           </label>
           <label htmlFor="">Seu perfil do github:
           <h2>{state.github}</h2>
           </label>


            <Link className='backButton' to={'/step3'}>Voltar</Link>
           <button onClick={handleNextStep}>Concluír</button>
        </C.Container>
        </Theme>
    )
}