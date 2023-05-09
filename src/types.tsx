export interface Logo {
  type: "attach" | "string";
  data: string;
  contentType: string;
}

export interface Team {
  key: string;
  logo: Logo;
  name: string;
  field: string;
  community: string;
  nextSchedule: string | null;
  state: "recording" | "recorded" | "offline" | "default" | undefined | null;
  isRecorded?: boolean;
}
