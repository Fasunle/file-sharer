export interface IFileCardProps {
  name: string;
  type: string;
  size: string | number;
}
export interface IFile {
  name: string;
  type: string;
  size: string | number;
}

export type AsidePropsType = {
  files: IFileCardProps[];
  isOpen: boolean;
};

export interface IFileResponse {
  senderEmail: string;
  receiverEmail: string;
  filename: string;
  fileUrl: string;
  contentType: string;
  fileId: string;
  date: string;
  tag: string;
}
