<?php

/*
 * This file is part of ekumanov/flarum-add-menu-actions.
 *
 * Copyright (c) 2021 Ngo Quoc Dat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Ekumanov\AddMenuActions\Listeners;

use Flarum\Discussion\Event\Saving;

class MarkUnread
{
    public function handle(Saving $event)
    {
        if (isset($event->data['attributes']['unread'])) {
            $state = $event->discussion->stateFor($event->actor);
            $state->last_read_post_number = 0;
            $state->last_read_at = null;
            $state->save();
        }
    }
}
