import Page from "@/shared/components/Page";
import { Box, Button, Dialog, DialogContent, DialogTitle, Paper } from '@mui/material'
import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import PublixTemplate from "../templates/publix/publix.template";
import { jsPDF } from 'jspdf'
import PublixForm from "../templates/publix/publix.form";
import { Product, ProductItem } from "@/shared/types/Product";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { setUserFormProducts } from "../templates/template.reducer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const [isOpen, setIsOpenDialog] = useState(false)
  const setTemplateDialog = (templateName: string) => {
    console.log(templateName)
    setIsOpenDialog(true);

  }
  const printInvoice = () => {

    navigate('/publix')
    // const htmlContent = document.getElementById('template-container-publix')


    // const htmlString = `<html><body>${htmlContent?.outerHTML as string}</body></html>`



    // const newWindow = window.open("", "_blank");

    // newWindow?.document.open();
    // newWindow?.document.write(htmlContent?.outerHTML as string);
    // newWindow?.document.close();

    //   newWindow?.print(); 
    // const iframe = document.createElement("iframe");
    // if (htmlString && iframe) {
    //   iframe.style.display = "none";
    //   document.body.appendChild(iframe);

    //   const iframeDocument =
    //     iframe.contentDocument || iframe.contentWindow?.document;

    //   iframeDocument?.open();
    //   iframeDocument?.write(htmlString);
    //   iframeDocument?.close();

    //   iframe.onload = () => {
    //     iframe.contentWindow?.print();
    //     document.body.removeChild(iframe);
    //   };
    // }


  }



  return (
    <Page
      title="Generate Invocie"
        >

      <h5 className="my-2">Choose Your Template</h5>


      <div className="grid grid-cols-12" >
        <div className="col-span-12 md:col-span-6 lg:col-span-2 gap-4" >
          <Paper onClick={() => setTemplateDialog('publix')} className="cursor-pointer hover:scale-105">
            <img className="w-full max-" src={'/images/templates/publix/template.png'} ></img>
          </Paper>
        </div>

      </div>



      <Dialog onClose={() => setIsOpenDialog(false)} maxWidth='lg' fullWidth open={isOpen}>
        <DialogTitle>Generate invoice like Publix </DialogTitle>
        <DialogContent>
          <div className="grid grid-cols-12">

            <div className="col-span-4">

              <Paper sx={{display:'flex',justifyContent:'center'}}>
                <Box sx={{width:'max-content'}} className='shadow'>

                <PublixTemplate ></PublixTemplate>
                </Box>
              </Paper>
            </div>
            <div className="col-span-8">


              <PublixForm onProductsChange={(prods)=>{dispatch(setUserFormProducts(prods))}}></PublixForm>

            </div>
          </div>
        </DialogContent>





        <Button onClick={() => printInvoice()}>Print</Button>
      </Dialog>

    </Page >




  );
}
