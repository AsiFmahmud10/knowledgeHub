import { ref, watchEffect } from 'vue'
import { db } from '../firebase/config'

const getCollection = (collection)=>{

    const documents = ref(null)
    const error = ref(null)

            /* 1  */

    let collectionRef =  db.collection(collection)
        .orderBy('createdAt')

       

        //An unsubscribe function that can be called to cancel the snapshot listener.

 const unsub =  collectionRef.onSnapshot((modifiedCollection) => {

        let results = []
            
                //returns a unsub
       modifiedCollection.docs.forEach((doc) =>{
                /*  2  */
                    doc.data().createdAt && results.push(  {...doc.data(), id : doc.id }  )
                }) 
             documents.value = results
            error.value = null

            }, (err)=>{
            documents.value = null; 
            error.value = err.message;
                console.log(error.value)
            })
             

        watchEffect((onInvalidate)=>{
            onInvalidate(()=>{
                unsub()
            })
          })
   


        return { error,documents }

}

export { getCollection}


    /*
    school -> student() -> Student_data{ name: "", roll:""}
    collection -> documents -> data

    */

   /*  (1)
            grab the collection
    
    using let insted of const as we are using realTime data if any documentt change we get a new instance which will be assign to the collection referene 
    
    */


      /*  
       (2)

       doc.data() && added as change of db data we get a local
      snapsot of the modified collection to work with that data quickly and then tha data is saved inside the db.
      but when we use the local snapsot the doc.data().createAt is nott exist as it is created at the database .   
      so first time we dont save anyting. when the bd save
     and send again the snapsot then the data().createdAt  exist then we save the data 
  
  */

