<?php

namespace App\Notifications;

use DB;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class OnRouteEmail extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->email = $email;
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $records = DB::select(
        'SELECT a.id, a.name, SUM(COALESCE(r.finish_date, LOCALTIMESTAMP(0)) - r.start_date) AS r_time, SUM(COALESCE(p.finish_date, LOCALTIMESTAMP(0)) - p.start_date) AS p_time,' .
        ' (EXTRACT(EPOCH FROM SUM(COALESCE(p.finish_date, LOCALTIMESTAMP(0)) - p.start_date)))/(EXTRACT(EPOCH FROM sum(COALESCE(r.finish_date, LOCALTIMESTAMP(0)) - r.start_date)))*100 AS percent' .
        ' FROM logs AS r, logs AS p, auto_parks AS a' .
        ' where  r.auto_park_id = p.auto_park_id' .
        ' AND p.auto_park_id = a.id' .
        ' AND r.type_state_id IN(SELECT id FROM type_states WHERE UPPER(name) IN( ? ))' .
        ' AND p.type_state_id NOT IN(SELECT id FROM type_states WHERE UPPER(name) IN( ? ))' .
        ' GROUP BY a.id, a.name HAVING (EXTRACT(EPOCH FROM SUM(COALESCE(p.finish_date, LOCALTIMESTAMP(0)) - p.start_date)))/(EXTRACT(EPOCH FROM SUM(COALESCE(r.finish_date, LOCALTIMESTAMP(0)) - r.start_date)))*100 > 10',
        ['ON ROUTE', 'ON ROUTE']);

        $messageBody = new MailMessage;

        foreach($records as $record) {
            $messageBody->line('id: ' . $record->id .
                                   ' name: ' . $record->name .
                                   ' work_time: ' . $record->r_time .
                                   ' not_work_time: ' . $record->p_time .
                                   ' percent: ' . $record->percent);
        }

        return $messageBody;
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
