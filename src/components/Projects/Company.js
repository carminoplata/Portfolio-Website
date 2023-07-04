//import { CarouselItem } from "react-bootstrap";

function CompanyItem(props){

    return (
        <div className="company-item">
            <a href={props.link}> 
                <img src={props.imgPath} alt={props.title} width="200" height="200"/>
            </a>
        </div>
    );

}

export default CompanyItem;