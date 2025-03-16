const { jsPDF } = window.jspdf;
let createpdf = document.querySelector('.createpdf');
let myImage = document.querySelector('#myImage')
let mySign = document.querySelector('#mySign') 
let myStamp = document.querySelector('#myStamp') 
let date = new Date();
let  formatDate = date.toLocaleString();

function createPdf1() {
    let Name = document.querySelector('#fullname').value;
    let number = document.querySelector('#number').value;
    let viaperson = document.querySelector('#via-person').value
   let addresstext = document.querySelector('#address-text').value
   let amount= document.querySelector('#amount').value
    let paymentmethod= document.querySelector('#payment-method').value
    let logincode= document.querySelector('#login-code').value

    if (Name.trim() == '' || number.trim() == '') {
        alert("Enter Name or number or Put NA");
    } 
    else if (viaperson.trim() ==''|| addresstext.trim()==''){
        alert ('Enter via person name or address or put NA')
    }
    else if (amount.trim()=='' || paymentmethod.trim()==''){
        alert("Enter correct amount and payment method to move ahead !")
    }
    else if (logincode != 5663){
        alert ("Enter Correct Login Code !")
    }
 
    
    else {
        let doc = new jsPDF();
        doc.addImage(myImage,'PNG',1,1,220,50)
        doc.setFont("helvetica", "bold");
        doc.line(10, 50, 200, 50);
        
        
        const headers = [["Name", "Mobile No", "via Person Name " ,"Amount" ]];
        const data = [
            [`${Name}`, `${number}`, `${viaperson}`, `${amount}`]
        ];

        // Add a title
        doc.setFont("helvetica", "bold");
        doc.text("Donation Reciept: ", 15, 65);

        // Insert the table
        doc.autoTable({
            head: headers,
            body: data,
            startX:30,
            startY: 75, 
            theme: 'grid', 
            headStyles: { fillColor: [248, 156, 9] }, 
        });
        doc.setFont("helvetica", "bold");
        doc.text("Address:",15,110)
        doc.setFont("helvetica", "normal");
        doc.text(`${addresstext}`,20,120)
        doc.setFont("helvetica", "bold");
        doc.text("Payment Method:",15,140)
        doc.setFont("helvetica", "normal");
        doc.text(`${paymentmethod}`,20,150)
        doc.addImage(mySign,'PNG',153,180,40,50)
        doc.addImage(myStamp,'PNG',20,175,40,50)

        doc.text('signature',160,210)
        doc.text("Reciept Generated on",20,250)
        
        doc.text(`${formatDate}`,77,250)

        doc.text("Thanks!  for the payment-",20,270)
        doc.setFont("helvetica", "bold");
        doc.text( `${Name}`,85,270)

        





















        // var pdfData = doc.output('bloburi');
        // var iframe = document.getElementById('myIframe');
        
        // iframe.src = pdfData;
        



        doc.save(`${Name}.pdf`);
        location.reload();
    }
}

createpdf.addEventListener("click", createPdf1);
