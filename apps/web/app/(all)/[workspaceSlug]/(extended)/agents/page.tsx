/**
 * Copyright (c) 2023-present Plane contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */

"use client";

import { useState } from "react";
import { observer } from "mobx-react";
import { useParams } from "react-router";
import { Button, Badge } from "@plane/ui";
import { useTranslation } from "@plane/i18n";
import { Bot, Plus } from "lucide-react";

export default observer(function AgentsPage() {
  const { t } = useTranslation();
  const params = useParams();
  const workspaceSlug = params.workspaceSlug?.toString() ?? "";
  const [agents, setAgents] = useState<any[]>([]);
  const [isLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-text-secondary">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">
            {t("agents.title", "AI Agents")}
          </h1>
          <p className="text-sm text-text-secondary mt-1">
            {t("agents.description", "Manage your AI agents for this workspace.")}
          </p>
        </div>
        <Button size="sm" prependIcon={<Plus className="h-4 w-4" />}>
          {t("agents.create", "Create Agent")}
        </Button>
      </div>

      {agents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((agent: any) => (
            <div
              key={agent.id}
              className="p-4 border border-custom-border-200 rounded-lg hover:bg-action-hover cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-custom-background-80 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-custom-text-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-text-primary truncate">{agent.name}</h3>
                    <Badge color="green" size="sm">{agent.status || "inactive"}</Badge>
                  </div>
                  <p className="text-xs text-text-secondary truncate">
                    {agent.description || "No description"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 px-6 border border-dashed border-custom-border-200 rounded-lg">
          <div className="p-3 bg-custom-background-80 rounded-full mb-4">
            <Bot className="h-8 w-8 text-custom-text-400" />
          </div>
          <h3 className="text-lg font-medium text-text-primary mb-1">
            {t("agents.empty.title", "No agents yet")}
          </h3>
          <p className="text-sm text-text-secondary text-center mb-4 max-w-sm">
            {t("agents.empty.description", "Create your first AI agent to get started.")}
          </p>
          <Button size="sm" prependIcon={<Plus className="h-4 w-4" />}>
            {t("agents.create", "Create Agent")}
          </Button>
        </div>
      )}
    </div>
  );
});
