import React from 'react'
import "../styles/SearchDataPage.css"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { placesStore } from '../store/Store';
import { useState, useEffect } from 'react';
import filterbtn from "../styles/filterBtn.png"
import { MdOutlinePets } from "react-icons/md"
import { AiFillStar } from "react-icons/ai"
import { TiTick } from "react-icons/ti";
import SearchPageFooter from './SearchPageFooter';


const SearchDetails = (props) => {


    const [openFilter, setOpenFilter] = useState(false); // toggle the filter dropdowm

    const [openPets, setOpenPets] = useState(false);   // topggle the pets dropdown
    const [petReviewes, setPetReviews] = useState(false);  // num of reviewes for pets

    const [coupleToggle, setCoupleToggle] = useState(false);  // toggle the couple button
    const [co, setCo] = useState(false);

    const params = useParams();
    const { loc } = params;

    var placeDetailsArray = placesStore.filter((item) => item.location.toLocaleLowerCase().includes(loc.toLocaleLowerCase()));  // getting the details from the main array with filter and storing it in "placeDetailsArray" and then passing it on to "orignalArray" state

    const [orignalArray, setOriginalArray] = useState(placeDetailsArray);


    const reviewesArr = [
        "Warm and welcoming environment",
        "Nurturing and collaborative environment",
        "Focused on early childhood development and socialization",
        "Great place for children to learn and grow",
        "Safe and inclusive environment",
        "Knowledgeable and skilled staff",
        "Friendly and nurturing environment",
        "Unique environment for children to explore interests ",
        "Knowledgeable and experienced staff",
        "Safe and inclusive environment with friendly staff"
    ]

    const openFilterHandler = () => {  // toggling the filter dropdown
        setOpenFilter(!openFilter)
        setOpenPets(false)
        setCoupleToggle(false)
    }

    const openPetsHandler = () => {   // toggline the pets dropdown
        setOpenPets(!openPets)
        setCoupleToggle(false)
        setOpenFilter(false)

    }

    const openCoupleHandler = () => {  // toggling couple dropdown
        setCoupleToggle(!coupleToggle);
        setOpenFilter(false)
        setOpenPets(false)
    }


    const petsFilter = () => {          // when the user click yes on dropdown this function gets triggerred thereby only showing me petsFriendly options and mutating the array

        let mutate = placeDetailsArray.filter((item) => {
            return item.pets === true
        })

        setOriginalArray(mutate)
        setPetReviews(true);
        setCo(false)


    }

    const nonPetsHandler = () => {       // when the user clicks no on the dropdown this function gets triggerred and again returning the original array
        setOriginalArray(placeDetailsArray);
        setPetReviews(false);
    }

    const coupleFilter = () => {          // filtering couple friendly options
        let mutate = placeDetailsArray.filter((item) => {
            return item.couple === true
        });

        setOriginalArray(mutate);
        setCo(true)
        setPetReviews(false)


    }


    const noncoupleHandler = () => {
        setOriginalArray(placeDetailsArray);
        setCo(false)

    }


    const lowToHighFilter = () => {
        const eitherSort = (arr = []) => {
            const sorter = (a, b) => {
                return +a.price - +b.price;
            };
            arr.sort(sorter);
        };
        eitherSort(placeDetailsArray);
        setOriginalArray(placeDetailsArray);

        setPetReviews(false)
        setCo(false)

    }

 

    return (
        <div className='searchDetailsMainParent'>
            {!coupleToggle && !openPets && <p className='text-2xl flex relative uppercase fof left-24 top-36'>Total {placeDetailsArray.length}  Childcare Coop's in {loc}  </p>}

            <div className='functionalityButtonsHold cursor-pointer flex gap-4'>
                <img src={filterbtn} className="w-36 zoom" onClick={openFilterHandler} />


            </div>

            {openFilter && <div className='dropdownFilter rounded-2xl capitalize'>
                <p className=" cursor-pointer pt-10 pr-4" onClick={lowToHighFilter} >  Low to high </p>
                <br />

                <div className='relative arrowsHold'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPh9c_dLqYXwYwXePJTwBAG8nTZG0V2LdAtA&usqp=CAU' className='h-4' />
                    <br />
                </div>


            </div>}

            {openPets && <div className='selectDropDown'>

                <div onClick={petsFilter} className=" pt-4 mb-8 cursor-pointer h-2 ">  Yes </div>
                <div onClick={nonPetsHandler} className="cursor-pointer h-2">No   </div>
            </div>}

            <div className='zindex'>
                {coupleToggle && <div className='selectDropDownCouple cursor-pointer'>
                    <div onClick={coupleFilter} className=" pt-4 mb-8 cursor-pointer h-2">  Yes </div>
                    <div onClick={noncoupleHandler} className="cursor-pointer h-2">No </div>
                </div>
                }
            </div>


            <div className=' topSearchLine absolute bg-slate-100'></div>






            {orignalArray.length > 0 && <div className='placeDetailsHold flex flex-col relative'>
                {orignalArray.map((item) => {
                    return (
                        <div key={item.id}>
                                <img src={item.homeMainPic} className="object-cover relative searchDetailsImage" />
                                <div className=' bifurcatingLine relative bg-slate-100'></div>

                                <div className='searchDatarevHold flex flex-col gap-1 relative'>
                                    <p className='fof text-md h-1'> {item.name} </p>
                                </div>

                                <p className=' inline-block relative text-xl mt-1 fof revSearchData'><AiFillStar className=' fill-red-400 pb-1 text-3xl inline-block' />  {item.stars} ({Math.floor(Math.random() * (40 - 20 + 1) + 4)}) </p>
                                <p className='SDPprice'> . </p>
                        </div>

                    )

                })}
            </div>
            }




            <div className='searchRevHold flex flex-col relative'>

                {reviewesArr.slice(0, orignalArray.length).map((item) => {
                    return (
                        <div key={Math.random()}>
                            <p className=' text-gray-500'> "{item}" </p>
                        </div>
                    )
                })}
            </div>


            {orignalArray.length > 8 ? <div className='spFooterHold relative'>
                <SearchPageFooter />
            </div> : ""}


        </div>
    )
}

export default SearchDetails

