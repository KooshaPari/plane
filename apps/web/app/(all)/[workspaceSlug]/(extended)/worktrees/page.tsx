/**
 * Copyright (c) 2023-present Plane contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */

"use client";

import { useState } from "react";
import { observer } from "mobx-react";
import { useTranslation } from "@plane/i18n";
import { Button, Badge, Spinner } from "@plane/ui";
import { GitBranch, Plus } from "lucide-react";

export default observer(function WorktreesPage() {
  const { t } = useTranslation();
  const [worktrees, setWorktrees] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <div className="flex items-center justify-center h-full"><Spinner /></div>;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{t("worktrees.title", "Worktrees")}</h1>
          <p className="text-sm text-text-secondary mt-1">
            {t("worktrees.description", "Manage your git worktrees.")}
          </p>
        </div>
        <Button size="sm" prependIcon={<Plus className="h-4 w-4" />}>
          {t("worktrees.create", "Create Worktree")}
        </Button>
      </div>
      {worktrees.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {worktrees.map((wt) => (
            <div key={wt.name} className="p-4 border rounded-lg hover:bg-action-hover cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-custom-background-80 flex items-center justify-center">
                  <GitBranch className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium truncate">{wt.name}</h3>
                    <Badge color="green" size="sm">{wt.status}</Badge>
                  </div>
                  <p className="text-xs text-text-secondary truncate">{wt.path || "No path"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 border border-dashed rounded-lg">
          <div className="p-3 bg-custom-background-80 rounded-full mb-4"><GitBranch className="h-8 w-8 text-custom-text-400" /></div>
          <h3 className="text-lg font-medium mb-1">{t("worktrees.empty.title", "No worktrees yet")}</h3>
          <p className="text-sm text-text-secondary mb-4">{t("worktrees.empty.description", "Create your first worktree.")}</p>
          <Button size="sm" prependIcon={<Plus className="h-4 w-4" />}>{t("worktrees.create", "Create Worktree")}</Button>
        </div>
      )}
    </div>
  );
});
