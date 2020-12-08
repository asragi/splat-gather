import { Presenter } from "../connect";
import { ParticipantsInfoViewProps } from "./view";

export const ParticipantsInfoPresenter: Presenter<{}, ParticipantsInfoViewProps> = () => {
  return {
    participants: [
      {
        iconSrc: 'https://gyazo.com/927776100f941aa22e920e98bbe18441/thumb/1000'
      }
    ]
  }
};
