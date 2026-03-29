/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 *
 * AgilePlus Extended Routes - Agents and Worktrees
 */

import { route } from "@react-router/dev/routes";

export const extendedRoutes = [
  route("agents", "./(all)/[workspaceSlug]/(extended)/agents/page.tsx"),
  route("worktrees", "./(all)/[workspaceSlug]/(extended)/worktrees/page.tsx"),
];
