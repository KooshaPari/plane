/**
 * Copyright (c) 2023-present Plane contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { route, layout } from "@react-router/dev/routes";

export const extendedRoutes = [
  // Agents routes
  layout("./(all)/[workspaceSlug]/(extended)/layout.tsx", [
    route("agents", "./(all)/[workspaceSlug]/(extended)/agents/page.tsx"),
    route("agents/:agentId", "./(all)/[workspaceSlug]/(extended)/agents/[agentId]/page.tsx"),
    route("worktrees", "./(all)/[workspaceSlug]/(extended)/worktrees/page.tsx"),
  ]),
];
