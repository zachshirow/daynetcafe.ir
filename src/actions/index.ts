import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import axios from "axios"

type serviceRequest = {
  fullname: string;
  phone: string;
  url: string;
  description: string;
}

export const server = {

  serviceRequest: defineAction({ 
    accept: 'form', 
    input: z.object({
      fullname: z.string(), 
      phone: z.string(),
      url: z.string(), 
      description: z.string().optional(),
    }), 
    handler: async (input:serviceRequest) => { 
      
      try{ 
        
        //TODO
        //1. send the data to nocodb database.
        // const nocoRequest = await axios({
        //   method: "POST",
        //   url: "https://app.nocodb.com/api/v2/tables/mpesh0s3r72m2hw/records",
        //   headers: {
        //     "xc-token": import.meta.env.NOCODB_TOKEN || process.env.NOCODB_TOKEN,
        //     "Content-Type": "application/json"
        //   },
        //   data: {
        //     "phone": input.phone,
        //     "fullname": input.fullname,
        //     "url": input.url
        //   }
        // })
    
        
        // 2. send the data as a message to BALE group.
        const baleToken = import.meta.env.BALE_TOKEN || process.env.BALE_TOKEN
        
        const baleRequest = await axios({
          method: "POST",
          url: `https://tapi.bale.ai/bot151681912:${baleToken}/sendMessage`,
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            "chat_id": 5135438946,
            "text": `\n #درخواست \n \n نام و نام خانوادگی: ${input.fullname} \n \n شماره تماس: ${input.phone} \n \n لینک خدمت: ${input.url} \n \n توضیحات مشتری: \n ${input.description}`
          }
        })
        
        return "success"
        
      } catch (error) {

        if (error instanceof Error) {
          console.error(error.message);
        }
      
      }
      
      
      }



     },
    ), 

  getGreeting: defineAction({
    input: z.object({
      name: z.string(),
    }),
    handler: async (input: HTMLButtonElement) => {
      return `Hello, ${input.name}!`
    }
  })
}