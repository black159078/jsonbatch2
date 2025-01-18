import {getFirestore,onSnapshot,collection,addDoc,Timestamp,getDocs,updateDoc,deleteDoc,doc} from 'firebase/firestore';


const db = getFirestore();
const dbRef = collection(db,"mytasks");

//UI
const getform = document.getElementById('form');
const gettextbox = document.getElementById('textbox');
const getul = document.querySelector('.list-group');


//State
let tasks = [];

getform.addEventListener('submit',(e)=>{
    // console.log('hay');
    addnew();

    e.preventDefault();
});

getul.addEventListener('click',getclickedli);


const getdatas = async ()=>{
    try{

        // => Method 1 (need to reload)

        // const docSnap = await getDocs(dbRef);
        // // console.log(docSnap);

        // docSnap.forEach(doc=>{
        //     // console.log(doc.data());
        //     // console.log(doc.id);

        //     let gettasks = doc.data();
        //         gettasks.id = doc.id;
        //         // console.log(gettasks);

        //     tasks.push(gettasks);

        // });

        // console.log(tasks);





        // => Method 2 (live)

        await onSnapshot(dbRef,docSnap=>{

            tasks = []; // reset new for previous pushed data
            
            docSnap.forEach(doc=>{

            let gettasks = doc.data();
                gettasks.id = doc.id;
                // console.log(gettasks);

            tasks.push(gettasks);

            });

            // console.log(tasks);

            showtaskstodom(tasks);

        });

        







        


    }catch(err){
        console.log("Get Data Error : ",err);
    }
}

getdatas();



const showtaskstodom = (taskarrs)=>{
    getul.innerHTML = "";

    taskarrs.forEach((task)=>{
        // console.log(task);

        const whenago = dateFns.formatDistance(task.created_at.toDate(),new Date(),{addSuffix:true});

        const li = document.createElement('li');

        if(task.done){
            li.classList.add("completed");
        }

        li.appendChild(document.createTextNode(task.todo));
        li.id = task.id;
        li.classList.add("list-group-item");

        li.innerHTML += `
                        <span class="time">${whenago}</span>
                        <div class="action">
                            <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
                            <button type="button" class="delete-btn"><i class="fas fa-trash-alt"></i></button>
                        </div> 
                        `;

        // console.log(li);
        getul.appendChild(li);
        
    });
}



async function addnew(){

    const todotext = gettextbox.value;
    // console.log(todotext);

    if(gettextbox.getAttribute('task-id')){
        // Update Data

        const dbRef = doc(db,"mytasks",gettextbox.getAttribute('task-id'));

        const now = new Date();

        try{
            await updateDoc(dbRef,{
                todo:todotext,
                created_at:Timestamp.fromDate(now),
                done:false
            });

            gettextbox.value = "";
            gettextbox.focus();
            gettextbox.removeAttribute('task-id');
        }catch(err){
            console.log("Update Data Error : ",err);
        }

    }else{
        // Create Data

        const now = new Date();

        try{
            await addDoc(dbRef,{
                todo:todotext,
                created_at:Timestamp.fromDate(now),
                done:false
            });

            gettextbox.value = "";
            gettextbox.focus();
        }catch(err){
            console.log("Create Data Error : ",err);
        }
    }



}



function getclickedli(e){
    // console.log(e.target);
    // console.log(e.target.closest("li"));
    // console.log(e.target.closest("li").getAttribute('id'));

    // console.log(e.target.className);
    // console.log(e.target.closest("button").className);

    const getid = e.target.closest("li").getAttribute("id");

    const button = e.target.closest("button");

    if(button){
        if(button.className === "edit-btn"){
            edittask(getid);
        }else if(button.className === "delete-btn"){
            deletetask(getid);
        }
    }else{
        donetask(getid);
    }
    
}


function gettaskbyid(id){
    // console.log(id);

    return tasks.find(task=>{
        return task.id === id;
    });
}

function edittask(id){
    // console.log("edit tasks id = ",id);

    const task = gettaskbyid(id); 
    console.log(task);
    console.log(task.todo);

    gettextbox.value = task.todo;
    gettextbox.setAttribute('task-id',task.id);
}


function deletetask(id){
    // console.log("delete tasks id = ",id);

    const isconfirmed = confirm("Are you sure to delete ?");

    if(isconfirmed){

        const dbRef = doc(db,"mytasks",id);
        deleteDoc(dbRef);

    }else{
        return false;
    }
}


async function donetask(id){
    // console.log("done tasks id = ",id);

    const getli = document.getElementById(id);
    // console.log(getli);

    getli.classList.toggle("completed");

    const docRef = doc(db,"mytasks",id);

    try{
        await updateDoc(docRef,{
            done:getli.classList.contains("completed") ? true:false
        });
    }catch(err){
        console.log("Done Data Error : ",err);
        throw err;
    }

}



