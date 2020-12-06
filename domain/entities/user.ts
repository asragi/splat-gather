import { UserId } from '../valueobjects/userId';

type UserProps = {
  id: UserId;
}

export class User {
  id: UserId;

  constructor(props: UserProps) {
    Object.assign(this, props);
  }
}
