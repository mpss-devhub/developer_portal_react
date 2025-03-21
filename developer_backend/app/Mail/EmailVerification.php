<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Support\Facades\URL;

class EmailVerification extends Mailable
{

    use Queueable, SerializesModels;

    public $url;
    // public function __construct($email)
    // {
    //     $generate = URL::temporarySignedRoute('verify-email',now()->addMinute(30),['email' => $email->email]);
    //     $this->url = str_replace(config('app.url'), config('app.frontend_url'), $generate);
    // }
    public function __construct($email)
    {
        $generate = URL::temporarySignedRoute(
            'verify-email',
            now()->addMinutes(30),
            ['email' => $email->email]
        );
        $frontendUrl = rtrim(config('app.frontend_url'), '/');
        $backendUrl = rtrim(config('app.url'), '/');
        if (strpos($generate, $backendUrl) !== false) {
            $this->url = str_replace($backendUrl, $frontendUrl, $generate);
        } else {
            $this->url = $frontendUrl . parse_url($generate, PHP_URL_PATH) . '?' . parse_url($generate, PHP_URL_QUERY);
        }
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Email Verification'
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'email_verification',
            with: ['verificationUrl' => $this->url]
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
