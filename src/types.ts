
export interface Route {
  name: string;
  isWorking: boolean;
  details?: string;
}

export interface Provider {
  id: string;
  name: string;
  routes: Route[];
}
