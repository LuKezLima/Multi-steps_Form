import { useNavigate, Link} from 'react-router-dom'
import * as C from './styles'
import {useForm, FormActions} from '../../contexts/FormContext'
import {Theme} from '../../components/Theme/index'
import { ChangeEvent, useEffect } from 'react'
import { SelectOption } from '../../components/SelectOption'

export const FormStep2 = () =>{
    const history = useNavigate()

    const { state, dispatch } = useForm();

    useEffect( ()=>{
        if(state.name === ''){
            history('/')
        }else{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
    }
    },[])


    const handleNextStep = ()=>{
        state.name !== '' ? history('/step3') : alert('Preencha o campo de nome antes de prosseguir')
        
    }

    const handleNameChange=(e:ChangeEvent<HTMLInputElement>) => {
        dispatch(
            {
                type: FormActions.setName,
                payload: e.target.value
            }
        )
    }

    const setLevel = (level:number) =>{
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return(
        <Theme>
        <C.Container>
           <p>Passo 2/3</p>
           <h1>{state.name}, o que melhor descreve você?</h1>
           <p>Escolha a melhor opção que condiz com seu estado atual na programação</p>

           <hr></hr>

            <SelectOption
            title="Sou iniciante"
            description="Comecei a programar há menos de 2 anos"
            icon="🥳"
            selected={state.level === 0}
            onClick={()=>setLevel(0)}
            />

            <SelectOption
            title="Sou programador"
            description="Já programo há 2 anos ou mais"
            icon="😎"
            selected={state.level === 1}
            onClick={()=>setLevel(1)}
            />
           
            <Link className='backButton' to='/'>Voltar</Link>
           <button onClick={handleNextStep}>Próximo</button>
        </C.Container>
        </Theme>
    )
}