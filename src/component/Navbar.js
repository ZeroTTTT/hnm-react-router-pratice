import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const menulist = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
    
    const navigate = useNavigate()
    
    const goToLogin=()=>{
        navigate('/Login')    
    }

    const search = (event) => {
        if (event.key == "Enter") {
            //console.log("we click this key", event.key)
            //입력한 검색어를 읽어와서
            let keyword = event.target.value;
            console.log(keyword);

            //url을 바꿔준다
            navigate(`/?q=${keyword}`)
        }
    }

  return (
    <div>    
        <div className='login-button' onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
        </div>
        <div className='nav-section'>
            <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" />
        </div>

        <div className='menu-area'>
            <ul className='menu-list'>
                {menulist.map(menu => <li>{menu}</li>) }                
            </ul>
            <div className='search-box' >
                <FontAwesomeIcon icon={faSearch} />
                <input className='input-search' type='text' placeholder="제품검색" onKeyPress={(event)=>search(event)}/>
                {/* 모든이벤트 리스너는 이벤트를 매개변수로 넘겨준다.  onKeyPress={(event)=>search(event)} */}
            </div>       
        </div>


        
    </div>
  )
}

export default Navbar