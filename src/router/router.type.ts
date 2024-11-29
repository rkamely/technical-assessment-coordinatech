import { RouteProps } from "react-router-dom";
import React from "react";

export type ContainerRoute = RouteProps & {
  path: string;
  component: React.ComponentType<Record<string, unknown>>;
};
