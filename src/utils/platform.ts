import type { Image } from "../types";

import UnityLogo from "/common/platformLogos/unity.svg";
import GodotLogo from "/common/platformLogos/godot.svg";
import UnrealLogo from "/common/platformLogos/unreal.svg";
import YoutubeLogo from "/common/platformLogos/youtube.svg";

const PLATFORMS: Record<string, Image> = {
  unity: {
    src: UnityLogo,
    alt: "Unity Engine's logo.",
  },
  godot: {
    src: GodotLogo,
    alt: "Godot Engine's logo.",
  },
  unreal: {
    src: UnrealLogo,
    alt: "Unreal Engine's logo.",
  },
  youtube: {
    src: YoutubeLogo,
    alt: "YouTube's logo.",
  },
};

export default PLATFORMS;
