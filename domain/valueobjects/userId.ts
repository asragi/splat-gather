export type UserIdProps = {
  id: string;
};

export class UserId {
  id: string;

  constructor(props: UserIdProps) {
    Object.assign(this, props);
  }
}
