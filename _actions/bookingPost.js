'use server'
import BookInfo from "../libs/models/bookInfo"
import dbConnected from "../libs/config/dbConnected"

export async function bookingPost() {
    try {
      await dbConnected();
      const data = JSON.parse(JSON.stringify(await BookInfo.find()));
      console.log(data);
      return { data };
    } catch (error) {
      return { errMsg: error.message };
    }
  }