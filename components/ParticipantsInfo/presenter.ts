import { Interface } from "readline";
import { UserData } from "../../application/users/userData";
import { Presenter } from "../connect";
import { ParticipantsInfoViewProps } from "./view";

export interface ParticipantsInfoPresenterProps {
  participants: UserData[]
}

export const ParticipantsInfoPresenter: Presenter<ParticipantsInfoPresenterProps, ParticipantsInfoViewProps> = ({
  participants
}: ParticipantsInfoPresenterProps) => {
  return {
    participants
  }
};
