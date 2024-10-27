import type {
  IconDefinition,
  SizeProp,
} from "@fortawesome/fontawesome-svg-core";
import * as FontAwesomeRegular from "@fortawesome/free-regular-svg-icons";
import * as FontAwesomeSolid from "@fortawesome/free-solid-svg-icons";
import type { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type React from "@types/react";
import type ReactRouterDOM from "@types/react-router-dom";
import Mousetrap from "mousetrap";
import * as ReactIntl from "react-intl";

declare global {
  interface Window {
    PluginApi: IPluginApi;
  }
}

interface IPluginApi {
  Event: {
    addEventListener: (
      event: string,
      callback: (e: CustomEvent) => void
    ) => void;
  };
  GQL: {
    useConfigurationQuery(): {
      data: { configuration: ConfigResult };
      loading: boolean;
    };
    useFindImagesQuery(args: { variables: QueryFindImagesArgs }): {
      data?: {
        findImages: Query["findImages"];
      };
      loading: boolean;
    };
    useFindPerformerQuery(args: { variables: QueryFindPerformerArgs }): {
      data: {
        findPerformer: Query["findPerformer"];
      };
      loading: boolean;
    };
    useFindPerformersQuery(args: { variables: QueryFindPerformersArgs }): {
      data?: {
        findPerformers: Query["findPerformers"];
      };
      loading: boolean;
    };
    useFindScenesQuery(args: { variables: QueryFindScenesArgs }): {
      data: { findScenes: Query["findScenes"] };
      loading: boolean;
    };
    useFindStudioQuery(args: { variables: QueryFindStudioArgs }): {
      data: { findStudio: Query["findStudio"] };
      loading: boolean;
    };
    useFindStudiosQuery(args: { variables: QueryFindStudiosArgs }): {
      data: { findStudios: Query["findStudios"] };
      loading: boolean;
    };
    useFindTagsQuery(args: { variables: QueryFindTagsArgs }): {
      data: { findTags: Query["findTags"] };
      loading: boolean;
    };
    useStatsQuery(): { data: { stats: StatsResultType } };
  };
  React: typeof React;
  ReactDOM: typeof ReactDOM;
  components: StashPluginComponents;
  hooks: any;
  libraries: {
    Apollo: any;
    Bootstrap: typeof ReactBootstrap;
    FontAwesomeRegular: typeof FontAwesomeSolid;
    FontAwesomeSolid: typeof FontAwesomeSolid;
    Intl: typeof ReactIntl;
    Mousetrap: typeof Mousetrap;
    MousetrapPause: any;
    ReactRouterDOM: typeof ReactRouterDOM;
  };
  loadableComponents: any;
  patch: PatchableComponents;
  register: {
    route: (path: string, component: React.FC<any>) => void;
  };
  utils: {
    NavUtils: any;
    loadComponents: any;
  };
}

/* -------------------------------------------------------------------------- */
/*                                 Components                                 */
/* -------------------------------------------------------------------------- */

interface StashPluginComponents {
  HoverPopover: (props: IHoverPopover) => React.JSX.Element;
  Icon: (props: IIcon) => FontAwesomeIcon;
  "PerformerDetailsPanel.DetailGroup": (
    props: IPerformerDetailsPanelDetailGroup
  ) => React.JSX.Element;
  SceneCard: (props: ISceneCardProps) => React.JSX.Element;
}

interface PatchableComponents {
  after: PatchableComponentsAfter;
  before: PatchableComponentsBefore;
  instead: PatchableComponentsInstead;
}

interface PatchableComponentsAfter {
  (
    component: "PerformerDetailsPanel.DetailGroup",
    fn: (props: IPerformerDetailsPanelDetailGroup) => React.JSX.Element[]
  ): void;
}

interface PatchableComponentsBefore {
  (
    component: "PerformerDetailsPanel.DetailGroup",
    fn: (props: IPerformerDetailsPanelDetailGroup) => React.JSX.Element[]
  ): void;
}

interface PatchableComponentsInstead {
  (
    component: "PerformerDetailsPanel.DetailGroup",
    fn: (
      props: IPerformerDetailsPanelDetailGroup,
      _: object,
      Original: React.JSX
    ) => React.JSX.Element[]
  ): void;
  (
    component: "SceneCard",
    fn: (
      props: ISceneCardProps,
      _: object,
      Original: React.JSX
    ) => React.JSX.Element[]
  ): void;
  (
    component: "SceneCard.Details",
    fn: (
      props: ISceneCardProps,
      _: object,
      Original: React.JSX
    ) => React.JSX.Element[]
  ): void;
  (
    component: "SceneCard.Image",
    fn: (
      props: ISceneCardProps,
      _: object,
      Original: React.JSX
    ) => React.JSX.Element[]
  ): void;
  (
    component: "SceneCard.Overlays",
    fn: (
      props: ISceneCardProps,
      _: object,
      Original: React.JSX
    ) => React.JSX.Element[]
  ): void;
  (
    component: "SceneCard.Popovers",
    fn: (
      props: ISceneCardProps,
      _: object,
      Original: React.JSX
    ) => React.JSX.Element[]
  ): void;
}

interface IPerformerDetailsPanelDetailGroup extends React.PropsWithChildren {
  collapsed: boolean;
  fullWidth: boolean;
  performer: Performer;
}

interface IHoverPopover extends React.PropsWithChildren {
  enterDelay?: number;
  leaveDelay?: number;
  content: JSX.Element[] | JSX.Element | string;
  className?: string;
  placement?: "top" | "right" | "bottom" | "left";
  onOpen?: () => void;
  onClose?: () => void;
  target?: React.RefObject<HTMLElement>;
}

interface ISceneCardProps {
  scene: Scene;
  containerWidth?: number;
  previewHeight?: number;
  index?: number;
  queue?: SceneQueue;
  compact?: boolean;
  selecting?: boolean;
  selected?: boolean | undefined;
  zoomIndex?: number;
  onSelectedChanged?: (selected: boolean, shiftKey: boolean) => void;
}

interface IIcon {
  icon: IconDefinition;
  className?: string;
  color?: string;
  size?: SizeProp;
}