import {useState, useEffect, useRef, React} from 'react';
import chevron from '../../assets/images/right-chevron.png';
import './Accordion.css';

export default function Accordion() {

    const [toggle, setToggle] = useState(false);
    const [heightText, setHeightText] = useState();

    const heightRefP = useRef();

    const changeToggle = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        setHeightText(`${heightRefP.current.scrollHeight + 18}`)
    }, [])

    const styleText = {
        height: toggle ? `${heightText}px` : "0px",
    }

    const rotateChevron = {
        transform : toggle ? 'rotate(90deg)' : 'rotate(0deg)',
    }

    return (
        <div className='accordion'>
            <button onClick={changeToggle}>Afficher / Masquer <img src={chevron} style={rotateChevron}/></button>
            <p ref={heightRefP} style={styleText} className={toggle ? "textAccordion activeAccord" : "textAccordion"}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At itaque repudiandae, atque sit excepturi voluptas. Accusantium quidem dolore modi exercitationem consequuntur doloremque illo sapiente vitae sequi? Exercitationem quas cumque consectetur soluta delectus dolorum? Fugiat magnam tempore, qui itaque, esse recusandae voluptate iure voluptatum dolore sint sapiente, minus dolorem nulla officia.
            </p>
            
        </div>
    )
}
