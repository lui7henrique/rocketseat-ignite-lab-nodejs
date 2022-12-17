import { Replace } from 'src/helpers/replace';
import { Content } from './content';

type ReadAt = Date | null | undefined;

export type NotificationProps = {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: ReadAt;
  createdAt: Date;
};

export class Notification {
  private props: NotificationProps;

  constructor(
    props: Replace<
      NotificationProps,
      {
        createdAt?: Date;
      }
    >,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: ReadAt) {
    this.props.readAt = readAt;
  }

  public get readAt(): ReadAt {
    return this.props.readAt;
  }

  public get createdAt(): ReadAt {
    return this.props.readAt;
  }
}
