output "instance_public_ip" {
  description = "The public IP of the instance"
  value       = aws_instance.example.public_ip
}

output "instance_private_dns" {
  description = "The private DNS of the instance"
  value       = aws_instance.example.private_dns
}