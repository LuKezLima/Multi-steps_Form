import {Link} from 'react-router-dom'
import * as C from './styles'

import {ReactComponent as ProfileIcon} from '../../assets/svg/profile.svg'
import {ReactComponent as BookIcon} from '../../assets/svg/book.svg'
import {ReactComponent as Mailcon} from '../../assets/svg/mail.svg'
import ResumeIcon from '../../assets/svg/resume.png'

type Props = {
    title: string;
    description: string;
    path:string;
    icon:string;
    active:boolean
}

const SideBarItem = ({description,icon,path,title, active}:Props) =>{
    return(
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'profile' &&  <ProfileIcon fill="white" width={24} height={24}/> }
                    {icon === 'book' &&  <BookIcon fill="white" width={24} height={24}/> }
                    {icon === 'mail' &&  <Mailcon fill="white" width={24} height={24}/> }
                    {icon === 'resume' &&  <img src={ResumeIcon}></img>}
                   
                    
                </C.IconArea>
                <C.Point active={active}>
                    
                </C.Point>
            </Link>
        </C.Container>
    )
}

export default SideBarItem