import { IEpoch } from './api.epoch';

export interface IProtocol {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export interface IApiCircle {
  id: number;
  name: string;
  logo: string;
  default_opt_in: number;
  alloc_text?: string;
  team_sel_text?: string;
  token_name?: string;
  vouching: number;
  min_vouches: number;
  nomination_days_limit: number;
  vouching_text: string;
  created_at: Date;
  updated_at: Date;
  protocol_id: number;
  protocol: IProtocol;
  default_opt_in: number;
  vouching: number;
  min_vouches: number;
  nomination_days_limit: number;
  vouching_text: string;
}

export interface ICircle extends IApiCircle {
  tokenName: string;
  teamSelText: string;
  allocText: string;
  vouchingText: string;
}