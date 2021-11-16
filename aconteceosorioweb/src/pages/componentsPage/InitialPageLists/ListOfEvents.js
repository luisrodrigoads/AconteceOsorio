import React, { useState, useEffect } from 'react';
import { DateTimePicker } from 'react-widgets';
import { useDispatch, useSelector} from 'react-redux';
import ReactPaginate from 'react-paginate';
import { getAllEvents, getEventsByDate } from '../../../actions/allEventActions';
import { BsFillCalendarMonthFill, BsFillCalendar2XFill } from 'react-icons/bs';

import "../../../styles/PaginationStyle.css";

import moment from 'react-widgets-moment'
import momentLocaliser from 'react-widgets-moment'
import { Link } from 'react-router-dom';

const PER_PAGE = 3;

export default function ListOfEvents (props) {

    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(0);

    const [visibilityCalendar, setVisibilityCalendar] = useState(false);
    const [dateCalendar, setDateCalendar] = useState(null);

    const list = useSelector(state => state.allEvents.eventList) || undefined

    useEffect(()=>{
        dispatch(getAllEvents())
        momentLocaliser(moment);  
    },[])

    const getValue = () => {
       dispatch(getEventsByDate(dateCalendar))
    }

    function handlePageClick({ selected: selectedPage}){
        setCurrentPage(selectedPage);
    }

    const offset = currentPage * PER_PAGE;

    const currentPageData = list
        .slice(offset, offset + PER_PAGE);

    const pageCount = Math.ceil(list.length / PER_PAGE);

    return(
        <>
        <div className="row justify-content-center">
            <button style={{borderRadius: '40%'}} type="button" className="btn btn-info btn-circle" onClick={()=>{setVisibilityCalendar(!visibilityCalendar)}}>
                {visibilityCalendar ? <BsFillCalendar2XFill /> : <BsFillCalendarMonthFill />}
            </button>
        </div>
        {
            visibilityCalendar ? (
                <>
                    <div className="row justify-content-center">
                        <DateTimePicker 
                            onChange={date => setDateCalendar(date)}
                            format="DD MMM YYYY"
                            time={false}
                            value={ !dateCalendar ? null : new Date(dateCalendar) }
                        />
                        <button className="btn btn-primary" onClick={()=> getValue()}>
                            Buscar
                        </button>
                    </div>
                </>
             ) : null
            
        }
        <div style={{padding: '20px'}} className="row justify-content-center">
            <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
        </div>
        <div className="row justify-content-center">
                {  
                        currentPageData.map((item,id) => {
                            
                            return(
                                <div key={id} className="card col-lg-3 col-md-5 col-sm-10 m-3 bg-light shadow">
                                    <Link to={{pathname: '/DetailsUser', state: item}}>
                                        <img className="card-img-top" style={{width:'100%',height:'300px'}} src='images/violao.jpg' alt="Alternative description"/>
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.eventTitle}</h5>
                                        <p className="card-text">{item.eventDescription}</p>
                                    </div>
                                </div>  
                            );
                            
                        })
                        
                }
                
        </div>
        </>
    );
}
