import axios from "axios";

export const SendData = async (values) => {
  try {
    await axios.post(
      `https://webhook.site/ca10cf98-62ca-412b-b50a-f339fb243fff`,
      values
    );
  } catch (err) {
    console.log(err);
  }
};
