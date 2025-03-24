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

    public function __construct($email)
    {
        // Generate the signed route
        $generate = URL::temporarySignedRoute(
            'verify-email',
            now()->addMinutes(30),
            ['email' => $email->email]
        );

        // Retrieve frontend and backend URLs
        $frontendUrl = rtrim(config('app.frontend_url'), '/');
        $backendUrl = rtrim(config('app.url'), '/');

        // Remove the backend URL and replace it with the frontend URL
        $parsedUrl = parse_url($generate);
        $query = isset($parsedUrl['query']) ? '?' . $parsedUrl['query'] : '';

        $this->url = $frontendUrl . '/auth/email/verify' . $query;
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
