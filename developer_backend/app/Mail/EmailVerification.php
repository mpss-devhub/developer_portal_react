<?php
namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Content;

class EmailVerification extends Mailable {
    use Queueable, SerializesModels;

    public $email;
    public function __construct($email)
    {
        $this->email = $email;
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