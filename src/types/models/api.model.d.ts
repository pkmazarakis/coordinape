export interface PostTokenGiftsParam {
  tokens: number;
  recipient_id: number;
  circle_id: number;
  note?: string;
}

export interface PostUsersParam {
  name: string;
  address: string;
  circle_id: number;
}

export interface PutUsersParam {
  name: string;
  bio: string;
  epoch_first_visit: number;
  non_receiver: number;
  non_giver: number;
  address: string;
  circle_id: number;
}

export interface PostCirclesParam {
  name: string;
}

export interface PutCirclesParam {
  name: string;
}
