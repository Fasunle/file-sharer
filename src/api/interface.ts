export type FileResponseType = {
  name: string;
  fileType: string;
  receiverEmail: string;
  date: string;
};

export interface IUser {
  userId: string;
  email: string;
  username: string;
}