export class Constants {
  public static readonly Summary: Const = {
    displayName: 'Summary',
    id: 'Summary',
  };

  public static readonly Skills: Const = {
    displayName: 'Skills',
    id: 'Skills',
  };

  public static readonly Experience: Const = {
    displayName: 'Work Experience',
    id: 'Experience',
  };

  public static readonly Projects: Const = {
    displayName: 'Project Details',
    id: 'Projects',
  };

  public static readonly Academic: Const = {
    displayName: 'Academic Details',
    id: 'Academic',
  };
}

export interface Const {
  displayName: string;
  id: string;
}
