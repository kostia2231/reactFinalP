import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function useSendUpdateData() {
  const { mutateAsync: sendOrder } = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(
        "http://localhost:3333/order/send",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
  });

  return { sendOrder };
}
