// -----------------------------------------------------------------------step - 6 : first 12 ta phone k dekhabo and baki gula (show all) button a click korle dekhabe
const loadPhone = async (searchText = '13') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;

    displayPhones(phones);
}
const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText = '';

    // console.log(phones.length);

    // // display show all button
    // const showAllContainer = document.getElementById('show-all-container');
    // if (phones.length > 12) {
    //     showAllContainer.classList.remove('hidden');
    // }
    // else {
    //     showAllContainer.classList.add('hidden');
    // }
    // // phone 10 tar beshi dekhabe navigator. 10 tar porer gula hidde kore rakhbe 
    // phones = phones.slice(0, 12);

    phones.forEach(phones => {
        // console.log(phones);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-200 p-4 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phones.image}" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${phones.phone_name}<h2>
                    <p>${phones.slug}</p>
                    <div class="card-actions justify-center my-3">
                        <button onclick="handleShowDetails('${phones.slug}')" class="btn btn-primary ">Show Details</button>
                    </div>
                    </div>`;
        phoneContainer.appendChild(phoneCard);
    });
    // hide loadingSpinnerToggle 
    loadingSpinnerToggle(false);
}


// 9 ) Show Details
const handleShowDetails = async (id) => {
    // console.log('clicked', id);
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;

    // display data call 
    showPhoneDetails(phone);
}
// display data
const showPhoneDetails = (phone) => {
    console.log(phone);
    const phoneName = document.getElementById('phone-name');
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML = `
    <img src="${phone.image}" alt="">
    <div class="font-medium" >
    <p>Storage:<span> ${phone?.mainFeatures?.storage
        }</span></p>
    <p><span>Display Size: ${phone?.mainFeatures?.displaySize
        }</span></p> 
    <p><span>Memory: ${phone?.mainFeatures?.memory
        }</span></p>
    <p><span>Slug: ${phone?.slug
        }</span></p>
    <p><span>Release Date: ${phone?.releaseDate
        }</span></p>
    <p><span>Brand: ${phone?.brand
        }</span></p>
    <p><span>GPS: ${phone?.others?.GPS || 'No GPS available'
        }</span></p>
    </div> 
    `



    // show the model 
    show_details_modal.showModal();
}

// handle search button (onClick er kaj)
const handleSearch = () => {
    loadingSpinnerToggle(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText);
}
// 8)  <!-- spiner  -->
const loadingSpinnerToggle = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}

loadPhone();






// //-------------------------------------------------------------------------- step - 1: data ta load korar kaj
// const loadPhone = async() => {
//     const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
//     const data = await res.json();
//     console.log(data);
// }



// // -----------------------------------------------------------------------step - 2 : forEach use kore amra sob gula data k alada alada korechi
// const loadPhone = async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
//     const data = await res.json();
//     const phones = data.data;
//     // console.log(phones);
//     // nicher function tak call kora hoiche
//     displayPhones(phones);
// }
// const displayPhones = phones => {
//     // console.log(phones);
//     // forEach er kaj holo = api er link er moddhe joto gula data ache sob ek ek kore dekhano
//     phones.forEach(phones => {
//         console.log(phones);
//     });
// }
// loadPhone();






// // -----------------------------------------------------------------------step - 3 : card design - (card create korar 4 ta step )
// const loadPhone = async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
//     const data = await res.json();
//     const phones = data.data;

//     displayPhones(phones);
// }
// const displayPhones = phones => {
//     // step -1 :
//     const phoneContainer = document.getElementById('phone-container');
//     phones.forEach(phones => {
//         console.log(phones);
//         // 2) create a div
//         const phoneCard = document.createElement('div');
//         phoneCard.classList = `card w-96 bg-gray-200 shadow-xl`;
//         // step - 3 : set inner text
//         phoneCard.innerHTML = `
//         <figure><img src="" alt="Shoes" /></figure>
//                     <div class="card-body">
//                         <h2 class="card-title">Shoes!</h2>
//                         <p>If a dog chews shoes whose shoes does he choose?</p>
//                         <div class="card-actions justify-end">
//                             <button class="btn btn-primary">Buy Now</button>
//                         </div>
//                     </div>`;
//         // step - 4 : append child
//         phoneContainer.appendChild(phoneCard);

//     });
// }
// loadPhone();




// // -----------------------------------------------------------------------step - 4 : "${file.name}"- use kore nam, img model er kaj
// const loadPhone = async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
//     const data = await res.json();
//     const phones = data.data;

//     displayPhones(phones);
// }
// const displayPhones = phones => {
//     const phoneContainer = document.getElementById('phone-container');
//     phones.forEach(phones => {
//         console.log(phones);
//         const phoneCard = document.createElement('div');
//         phoneCard.classList = `card bg-gray-200 p-4 shadow-xl`;
//         phoneCard.innerHTML = `
//         <figure><img src="${phones.image}" alt="Shoes" /></figure>
//                 <div class="card-body">
//                     <h2 class="card-title">${phones.phone_name}<h2>
//                     <p>${phones.slug}</p>
//                     <div class="card-actions justify-end">
//                         <button class="btn btn-primary">Buy Now</button>
//                     </div>
//                     </div>`;
//         phoneContainer.appendChild(phoneCard);

//     });
// }
// loadPhone();









// // -----------------------------------------------------------------------step - 5 : search button work
// const loadPhone = async (searchText) => {
//     const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
//     const data = await res.json();
//     const phones = data.data;

//     displayPhones(phones);
// }
// const displayPhones = phones => {
//     const phoneContainer = document.getElementById('phone-container');
//     // clear phone container cards before adding new cards
//     phoneContainer.innerText = '';

//     phones.forEach(phones => {
//         console.log(phones);
//         const phoneCard = document.createElement('div');
//         phoneCard.classList = `card bg-gray-200 p-4 shadow-xl`;
//         phoneCard.innerHTML = `
//         <figure><img src="${phones.image}" alt="Shoes" /></figure>
//                 <div class="card-body">
//                     <h2 class="card-title">${phones.phone_name}<h2>
//                     <p>${phones.slug}</p>
//                     <div class="card-actions justify-end">
//                         <button class="btn btn-primary">Buy Now</button>
//                     </div>
//                     </div>`;
//         phoneContainer.appendChild(phoneCard);
//     });
// }
// // handle search button (onClick er kaj)
// const handleSearch = () => {
//     // text field er kaj
//     const searchField = document.getElementById('search-field');
//     const searchText = searchField.value;
//     console.log(searchText);
//     loadPhone(searchText);
// }
