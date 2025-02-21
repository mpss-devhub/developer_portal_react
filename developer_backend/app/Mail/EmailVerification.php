<?php
namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Support\Facades\URL;

class EmailVerification extends Mailable {
    
    use Queueable, SerializesModels;

    public $url;
    public function __construct($email)
    {
        $generate = URL::temporarySignedRoute('verify-email',now()->addMinute(1),['email' => $email]);
        $this->url = str_replace(env('APP_URL'),env('FRONTEND_URL'), $generate);
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject:'Email Verification'
        );
    }

    public function content(): Content{
        return new Content(
            markdown:'email_verification'
        );
    }

    public function attachments(): array
    {
        return [];
    }
}